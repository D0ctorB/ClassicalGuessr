from pydub import AudioSegment
import random
import download

for i in range(len(download.TITLES)):
    #create mp3 from each audio webm
    audiopath = "audios/" + download.TITLES[i] + '.webm'
    length = 5000
    audio = AudioSegment.from_file(audiopath, format='webm')
    millis = len(audio)

    for j in range(3):
        start = random.randint(0, millis - length)
        trimmed = audio[start:start + length]
        trimmed.export('trimmed/' + str(j) + download.TITLES[i] + '.mp3')

