def shortest_word(s):
    words = s.split()
    return min(words, key=len)

text = "Python is a powerful programming language"
print(shortest_word(text)) // a

// Without min() :

def shortest_word(s):
    words = s.split()
    shortest = words[0]

    for word in words:
        if len(word) < len(shortest):
            shortest = word

    return shortest

print(shortest_word("Python is a powerful programming language")) //a
