def sum_pairs(nums, goal):
    """Return tuple of first pair of nums that sum to goal.

    For example:

        >>> sum_pairs([1, 2, 2, 10], 4)
        (2, 2)

    (4, 2) sum to 6, and come before (5, 1):

        >>> sum_pairs([4, 2, 10, 5, 1], 6) # (4, 2)
        (4, 2)

    (4, 3) sum to 7, and finish before (5, 2):

        >>> sum_pairs([5, 1, 4, 8, 3, 2], 7)
        (4, 3)

    No pairs sum to 100, so return empty tuple:

        >>> sum_pairs([11, 20, 4, 2, 1, 5], 100)
        ()
    """
#     0 1
#     0 2
#     1 2
#     1 3
#     2 3
#     2 4


# start at 0 1
# alternate adding 1 to each Side

    a = 0
    b = 1
    toggle = True

    while b < len(nums):
        tup = (nums[a], nums[b])
        if nums[a] + nums[b] == goal:
            return tup

        if toggle:
            b += 1
        else:
            a += 1

        toggle = not toggle
    return ()
