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
            'amount_cents' => $this->amount_cents,
            'yearly_cost' => $this->yearly_cost,
            'category_id' => $this->category->id,
            'category' => $this->category->name,
            'category_color' => $this->category->color,
            'frequency_id' => $this->frequency->id,
            'frequency' => $this->frequency->name,
        ];
    }
}
