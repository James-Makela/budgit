<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CostResource extends JsonResource
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
            'name' => $this->name,
            'amount' => $this->amount_cents / 100,
            'yearly_cost' => $this->yearly_cost,
            'category' => $this->category->name,
            'category_color' => $this->category->color,
            'frequency' => $this->frequency->name,
        ];
    }
}
