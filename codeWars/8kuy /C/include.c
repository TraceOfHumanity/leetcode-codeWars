// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

#include <stdbool.h>
#include <stddef.h>

bool include(const int* arr, size_t size, int item)
{
    for (size_t i = 0; i < size; i++)
    {
        if (arr[i] == item)
        {
            return true;
        }
    }
}