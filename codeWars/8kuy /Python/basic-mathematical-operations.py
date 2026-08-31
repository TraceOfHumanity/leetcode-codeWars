from unittest import case


def basicOp(operation, value1, value2):
    if operation == "+":
        return value1 + value2
    if operation == "-":
        return value1 - value2
    if operation == "*":
        return value1 * value2
    if operation == "/":
        return value1 / value2

print(basicOp("+", 4, 7))
print(basicOp("-", 15, 18))
print(basicOp("*", 5, 5))
print(basicOp("/", 49, 7))