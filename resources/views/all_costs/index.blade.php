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
                                <x-line href="{{ route('allCosts.show', $cost) }}">
                                    <h3 class="w-1/3">{{ $cost->name }}</h3>
                                    <p class="flex-1 text-left">{{ $cost->category->category_name }}</p>
                                    <p class="w-24 text-right">{{ $cost->formatted_amount_cents }}</p>
                                    <form action="{{ route('allCosts.destroy', $cost->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')

                                        <x-danger-button type="submit">
                                            Delete
                                        </x-danger-button>
                                    </form>
                                </x-line>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
