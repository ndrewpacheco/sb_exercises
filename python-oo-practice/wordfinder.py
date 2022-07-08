"""Word Finder: finds random words from a dictionary."""
import random
from venv import create
my_path = "/Users/andrewpacheco/Code/2022/springboard/sb_exercises/python-oo-practice/words.txt"
foods_path = "/Users/andrewpacheco/Code/2022/springboard/sb_exercises/python-oo-practice/foods.txt"


class WordFinder:
    """Finds a word from a list of words"""
    """Machine for finding random words from dictionary.
    
    >>> wf = WordFinder("simple.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    """

    def __init__(self, path):
        """Creates WordFinder instance and files word_list from path"""

        file = open(path)
        self.word_list = self.create_word_list(file)

        file.close()
        print(f"{len(self.word_list)} words read")

    def create_word_list(self, words):
        """creates a list of words from file"""
        lst = []
        for word in words:
            lst.append(word.strip())
        return lst

    def random(self):
        """returns random word from list"""
        idx = random.randint(0, len(self.word_list) - 1)
        return self.word_list[idx]


class SpecialWordFinder(WordFinder):
    """Finds a word from a list of special words"""
    """Specialized WordFinder that excludes blank lines/comments.
    
    >>> swf = SpecialWordFinder("complex.txt")
    3 words read

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True
    """

    def __init__(self, path):
        """Creates WordFinder instance and files word_list from path"""
        super().__init__(path)

    def create_word_list(self, words):
        """creates a list of words from file"""
        lst = []
        for word in words:

            if word[0].isalpha():
                lst.append(word.strip())
        return lst
