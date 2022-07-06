
def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    # phrase = phrase.lower()
    # result = [char for char in phrase if char is not ' ']
    # # for char in phrase:
    # #     if char is not ' ':
    # #         result.append(char)

    # reversed = result.copy()
    # reversed.reverse()
    # return result == reversed

    result = phrase.lower().replace(' ', '')
    return result == result[::-1]
