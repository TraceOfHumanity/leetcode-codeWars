#include <stdio.h>
#include <ctype.h>

int main() {
  char letter;
  printf("Enter a letter: ");
  scanf("%c", &letter);

  if (isalpha((unsigned char)letter)) {
    printf("Position of alphabet: %d\n", tolower((unsigned char)letter) - 'a' + 1);
  } else {
    printf("Not a letter\n");
  }

  return 0;
}