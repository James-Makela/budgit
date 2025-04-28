<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'date' => $this->date,
            'description' => $this->description,
            'credit_cents' => $this->credit_cents,
            'debit_cents' => $this->debit_cents,
            'balance_cents' => $this->balance_cents,
            'is_processed' => $this->is_processed,
            'category' => $this->category->name,
            'category_id' => $this->category->id,
            'category_color' => $this->category->color,
        ];
    }
}
