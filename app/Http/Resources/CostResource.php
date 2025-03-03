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
            'amount_per_budget' => $this->amount_cents / 100 / 26,
            'category' => $this->category->name,
            'frequency' => $this->frequency->name,
        ];
    }
}
