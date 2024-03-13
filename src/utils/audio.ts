import intro from '../assets/intro.mp3'

export class StarWarsAudio {
  private static instance: StarWarsAudio
  private static audio: HTMLAudioElement

  private constructor () {
    StarWarsAudio.audio = new Audio(intro)
    StarWarsAudio.audio.preload = 'auto'
    StarWarsAudio.audio.loop = false
  }

  public static getInstance (): StarWarsAudio {
    if (StarWarsAudio.instance === undefined) {
      StarWarsAudio.instance = new StarWarsAudio()
    }

    return StarWarsAudio.instance
  }

  public play (): void {
    StarWarsAudio.audio.play().catch(error => { console.log(error) })
  }

  public pause (): void {
    if (!StarWarsAudio.audio.paused) {
      StarWarsAudio.audio.pause()
      StarWarsAudio.audio.currentTime = 0
    }
  }
}
