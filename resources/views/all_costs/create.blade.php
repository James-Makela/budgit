<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('Add Cost') }}
            </h2>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100 m-auto">
                    <form action="{{ route('allCosts.store') }}" method="POST">
                        @csrf
                        <h2>Add a new cost</h2>

                        <!-- cost name -->
                        <x-input-label for="name">Cost Name:</x-input-label>
                        <x-text-input
                            type="text"
                            id="name"
                            name="name"
                            value="{{ old('name') }}"
                            required
                        ></x-text-input>

                        <!-- cost amount -->
                        <x-input-label for="name">Cost Amount:</x-input-label>
                        <x-text-input
                            type="integer"
                            id="amount_cents"
                            name="amount_cents"
                            value="{{ old('amount_cents') }}"
                            required
                        ></x-text-input>

                        <!-- cost frequency -->
                        <x-input-label for="name">Cost Frequency (days):</x-input-label>
                        <x-text-input
                            type="integer"
                            id="frequency_days"
                            name="frequency_days"
                            value="{{ old('frequency_days') }}"
                            required
                        ></x-text-input>

                        <!-- cost name -->
                        <x-input-label for="name">First Payment:</x-input-label>
                        <x-text-input
                            type="date"
                            id="first_payment"
                            name="first_payment"
                            value="{{ old('first_payment') }}"
                            required
                        ></x-text-input>

                        <!-- cost category -->
                        <x-input-label for="category">Category:</x-input-label>
                        <x-text-input
                            type="text"
                            id="category"
                            name="category"
                            value="{{ old('category') }}"
                            required
                        ></x-text-input>

                        <x-primary-button>Add Cost</x-primary-button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
