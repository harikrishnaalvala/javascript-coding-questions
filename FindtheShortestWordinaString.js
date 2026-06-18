def shortest_word(s):
    words = s.split()
    return min(words, key=len)

text = "Python is a powerful programming language"
print(shortest_word(text)) // a
