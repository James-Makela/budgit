<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IncomeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'source' => $this->source,
            'person' => $this->person,
            'income_cents' => $this->income_cents / 100,
            'frequency' => $this->frequency->name,
        ];
    }
}
