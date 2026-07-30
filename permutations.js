def permutations(s, path=""):
    if len(s) == 0:
        print(path)
        return

    for i in range(len(s)):
        permutations(s[:i] + s[i+1:], path + s[i])

permutations("ABC")
/* ABC
ACB
BAC
BCA
CAB
CBA */
