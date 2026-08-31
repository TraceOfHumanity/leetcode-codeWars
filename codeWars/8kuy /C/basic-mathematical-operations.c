#include <stdio.h>

double basicOp(char operation, double value1, double value2);

int main() {
  printf("%.0f\n", basicOp('+', 4, 7));   // 11
  printf("%.0f\n", basicOp('-', 15, 18)); // -3
  printf("%.0f\n", basicOp('*', 5, 5));   // 25
  printf("%.0f\n", basicOp('/', 49, 7));  // 7
}
double basicOp(char operation, double value1, double value2) {
  switch (operation) {
  case '+':
    return value1 + value2;
  case '-':
    return value1 - value2;
  case '*':
    return value1 * value2;
  case '/':
    return value1 / value2;
  default:
    return 0.0;
  }
}