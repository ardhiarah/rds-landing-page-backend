<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GalleryImageResource\Pages;
use App\Filament\Resources\GalleryImageResource\RelationManagers;
use App\Models\GalleryImage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class GalleryImageResource extends Resource
{
    protected static ?string $model = GalleryImage::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';
    protected static ?string $navigationGroup = 'Gambar';

    public static function getNavigationLabel(): string
    {
        return 'Galeri';
    }

    public static function getModelLabel(): string
    {
        return 'Galeri';
    }

    public static function getPluralModelLabel(): string
    {
        return 'Galeri';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Gambar')
                    ->schema([
                        Forms\Components\FileUpload::make('image_path')
                            ->image()
                            ->disk('public')
                            ->visibility('public')
                            ->directory('gallery')
                            ->imageEditor()
                            ->required(),
                        Forms\Components\TextInput::make('caption')->maxLength(255),
                        Forms\Components\Toggle::make('is_published')->label('Publish')->default(true),
                    ])
                    ->columns(1),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')->label('Gambar')->square()->disk('public'),
                Tables\Columns\TextColumn::make('caption')->limit(30),
                Tables\Columns\IconColumn::make('is_published')->boolean(),
                Tables\Columns\TextColumn::make('sort_order')->label('Urutan')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->reorderable('sort_order')
            ->headerActions([
                Tables\Actions\Action::make('bulkUpload')
                    ->label('Bulk Upload')
                    ->form([
                        Forms\Components\FileUpload::make('images')
                            ->image()
                            ->multiple()
                            ->appendFiles()
                            ->preserveFilenames()
                            ->disk('public')
                            ->visibility('public')
                            ->directory('gallery')
                            ->required(),
                    ])
                    ->action(function (array $data) {
                        $paths = $data['images'] ?? [];
                        $start = (int) \App\Models\GalleryImage::max('sort_order');
                        $order = $start;

                        foreach ($paths as $path) {
                            $order++;
                            \App\Models\GalleryImage::create([
                                'image_path' => $path,
                                'caption' => null,
                                'is_published' => true,
                                'sort_order' => $order,
                            ]);
                        }
                    }),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGalleryImages::route('/'),
            'create' => Pages\CreateGalleryImage::route('/create'),
            'edit' => Pages\EditGalleryImage::route('/{record}/edit'),
        ];
    }
}
