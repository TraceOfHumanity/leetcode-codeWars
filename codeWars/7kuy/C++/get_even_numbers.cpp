// The solution would work like the following:

// get_even_numbers({2,4,5,6}) => {2,4,6}

#include <vector>

std::vector<int> get_even_numbers(const std::vector<int>& arr) {
    std::vector<int> result;
    for (int num : arr) {
        if (num % 2 == 0) {
            result.push_back(num);
        }
    }
    return result;
}
