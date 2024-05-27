// Fontawesome icon subset
// https://fontawesome.com/v5.15/how-to-use/on-the-web/advanced/svg-javascript-core
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faStopwatch, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faMastodon, faReddit, faKeybase, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faStopwatch)
library.add(faCamera)
library.add(faGithub)
library.add(faGitlab)
library.add(faMastodon)
library.add(faReddit)
library.add(faKeybase)
library.add(faLinkedin)

dom.watch()