def position(letter):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return f'Position of alphabet: {alphabet.index(letter) + 1}'

print(position('a'))
print(position('z'))
print(position('e'))