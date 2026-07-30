def kth_elements(arr, k):
    arr.sort()
    return arr[k-1], arr[-k]

arr = [7, 10, 4, 3, 20, 15]
k = 3

small, large = kth_elements(arr, k)

print("Kth Smallest:", small) // Kth Smallest: 7
print("Kth Largest:", large) // Kth Largest: 10

