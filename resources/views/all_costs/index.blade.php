<x-app-layout>
    <x-slot name="header">
        <div class="flex justify-between">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('All Costs') }}
            </h2>
            <a href="{{ route('allCosts.create') }}" class="btn">Add Cost</a>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    {{ __("Here is where you set and view all costs!") }}
                    <ul>
                        @foreach ($allCosts as $cost)
                            <li>
                                <x-line href="">
                                    <h3>{{ $cost->name }}</h3>
                                    <p>{{ $cost->amount_cents }}</p>
                                </x-line>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
