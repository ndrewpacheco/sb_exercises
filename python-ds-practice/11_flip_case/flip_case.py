def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    # doubled = [num * 2 for num in nums]

    # return [char.lower() if char.isupper() else char.upper()]

    result = []
    for char in phrase:
        if char.lower() == to_swap.lower():
            char = char.swapcase()
        result.append(char)

    return "".join(result)
