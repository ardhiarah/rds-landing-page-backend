<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ClientLogoResource\Pages;
use App\Models\ClientLogo;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ClientLogoResource extends Resource
{
    protected static ?string $model = ClientLogo::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-office';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Logo Klien')
                    ->schema([
                        Forms\Components\FileUpload::make('logo_path')
                            ->image()
                            ->directory('clients')
                            ->imageEditor()
                            ->required(),
                        Forms\Components\TextInput::make('name')->maxLength(255),
                        Forms\Components\Toggle::make('is_published')->label('Publish')->default(true),
                    ])
                    ->columns(1),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('logo_path')->label('Logo')->square(),
                Tables\Columns\TextColumn::make('name')->limit(30),
                Tables\Columns\IconColumn::make('is_published')->boolean(),
                Tables\Columns\TextColumn::make('sort_order')->label('Urutan')->sortable(),
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
                            ->directory('clients')
                            ->required(),
                    ])
                    ->action(function (array $data) {
                        $paths = $data['images'] ?? [];
                        $start = (int) ClientLogo::max('sort_order');
                        $order = $start;

                        foreach ($paths as $path) {
                            $order++;
                            ClientLogo::create([
                                'logo_path' => $path,
                                'name' => null,
                                'is_published' => true,
                                'sort_order' => $order,
                            ]);
                        }
                    }),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListClientLogos::route('/'),
            'create' => Pages\CreateClientLogo::route('/create'),
            'edit' => Pages\EditClientLogo::route('/{record}/edit'),
        ];
    }
}

