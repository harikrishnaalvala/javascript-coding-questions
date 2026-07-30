def palindrome_substrings(s):
    result = []

    for i in range(len(s)):
        # Odd length
        l = r = i
        while l >= 0 and r < len(s) and s[l] == s[r]:
            result.append(s[l:r+1])
            l -= 1
            r += 1

        # Even length
        l, r = i, i + 1
        while l >= 0 and r < len(s) and s[l] == s[r]:
            result.append(s[l:r+1])
            l -= 1
            r += 1

    return result

print(palindrome_substrings("abba"))
