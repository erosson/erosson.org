// Fontawesome icon subset
// https://fontawesome.com/v5.15/how-to-use/on-the-web/advanced/svg-javascript-core
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faStopwatch, faCamera, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faMastodon, faReddit, faKeybase, faLinkedin, faSignalMessenger} from '@fortawesome/free-brands-svg-icons'

library.add(faCode)
library.add(faStopwatch)
library.add(faCamera)
library.add(faGithub)
library.add(faGitlab)
library.add(faMastodon)
library.add(faReddit)
library.add(faKeybase)
library.add(faLinkedin)
library.add(faSignalMessenger)

dom.watch()