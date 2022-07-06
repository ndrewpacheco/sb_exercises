def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """

    numsDict = {}
    # convert to set to avoid duplicates
    for num in set(nums):
        # set numsDict with keys being count, values being the num
        numsDict[nums.count(num)] = num

    # find largest count in numsDict, and return it's value
    largest_count = max(numsDict.keys())
    return numsDict[largest_count]
