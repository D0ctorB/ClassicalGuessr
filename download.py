from pytube import YouTube
from pytube import Playlist

trimsPerAudio = 3
global TITLES
TITLES = []
p = Playlist('https://www.youtube.com/playlist?list=PLRyfoOrTGlqQREjWQaL-mLP_GcBbfFVYX')

for url in p.video_urls:
    yt = YouTube(url)
    TITLES.append(yt.title.replace("'","").replace(",", "").replace(".", "").replace("|", "").replace(":", ""))
    audio_stream = yt.streams.filter(only_audio=True).get_by_itag(251)
    audio_stream.download(output_path= "audios")

for title in TITLES:
    f = open("trimmedPaths.txt", "a", encoding='utf-8')
    for i in range(trimsPerAudio):
        f.write("'C:/Users/nm556/OneDrive/Desktop/ClassicalGuessr/trimmed/" + str(i) + title + ".mp3',\n")
        f.close()

