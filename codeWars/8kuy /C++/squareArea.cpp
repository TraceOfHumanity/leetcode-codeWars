// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// Describe(sample_tests)
// {
//     It(fixed_tests)
//     {
//       Assert::That(square_area(2),     EqualsWithDelta(1.62,    1e-9));
//       Assert::That(square_area(0),     EqualsWithDelta(0,       1e-9));
//       Assert::That(square_area(14.05), EqualsWithDelta(80,      1e-9));
//       Assert::That(square_area(100),   EqualsWithDelta(4052.85, 1e-9));
//     }
// };

#include <cmath>

double square_area(double A)
{
  return round(pow(2 * A / M_PI, 2) * 100) / 100;
};