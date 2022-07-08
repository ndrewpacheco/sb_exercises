"""Python serial number generator."""


class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start):
        "Create serial generator with start attribute"
        self.start = start
        self.current_serial = start

    def generate(self):
        'Creates new serial number'
        result = self.current_serial
        self.current_serial += 1
        return result

    def reset(self):
        "resets current serial"
        self.current_serial = self.start
