<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactSubmissionResource\Pages;
use App\Models\ContactSubmission;
use Filament\Resources\Resource;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components\TextEntry;
use Filament\Tables;
use Filament\Tables\Table;

class ContactSubmissionResource extends Resource
{
    protected static ?string $model = ContactSubmission::class;

    protected static ?string $navigationIcon = 'heroicon-o-inbox-arrow-down';
    protected static ?string $navigationGroup = 'Layanan';
    protected static ?int $navigationSort = 20;

    public static function getNavigationLabel(): string
    {
        return 'Kontak';
    }

    public static function getModelLabel(): string
    {
        return 'Kontak';
    }

    public static function getPluralModelLabel(): string
    {
        return 'Kontak';
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->label('Nama')->searchable(),
                Tables\Columns\TextColumn::make('email')->label('Email')->searchable(),
                Tables\Columns\TextColumn::make('institution')->label('Institusi')->limit(30),
                Tables\Columns\TextColumn::make('message')->label('Pesan')->limit(40),
                Tables\Columns\TextColumn::make('created_at')->dateTime()->label('Diterima')->sortable(),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateHeading('Belum ada data kontak');
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                TextEntry::make('name')->label('Nama'),
                TextEntry::make('email')->label('Email')->copyable(),
                TextEntry::make('institution')->label('Institusi'),
                TextEntry::make('message')->label('Pesan')->columnSpanFull(),
                TextEntry::make('created_at')->label('Diterima')->dateTime(),
            ])
            ->columns(2);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContactSubmissions::route('/'),
            'view' => Pages\ViewContactSubmission::route('/{record}'),
        ];
    }
}
