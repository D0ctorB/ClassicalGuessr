from pydub import AudioSegment
import random
import download

filePrefix = 'http://localhost:8000/trimmed/'
trimmedPaths = open('trimmedPaths.txt', 'r')
def formatLine(line):
    return line.replace(filePrefix, '').strip()

for i in range(len(download.TITLES)):
    #create mp3 from each audio webm
    audiopath = "audios/" + download.TITLES[i] + '.webm'
    length = 5000
    audio = AudioSegment.from_file(audiopath, format='webm')
    millis = len(audio)

    for j in range(3):
        start = random.randint(0, millis - length)
        trimmed = audio[start:start + length]
        line = trimmedPaths.readline()
        trimmed.export('trimmed/' + formatLine(line))

