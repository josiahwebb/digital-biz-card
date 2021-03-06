import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer() {
    return (
        <div className='footer'>
            <a className="social-link" target="_blank" href="https://www.twitter.com/0xjosiah/"><FontAwesomeIcon className="social-links__icon" icon={brands('twitter')} /></a>
            <a className="social-link" target="_blank" href="https://www.instagram.com/0xjosiah"><FontAwesomeIcon className="social-links__icon" icon={brands('instagram')} /></a>
            <a className="social-link" target="_blank" href="https://www.github.com/0xjosiah"><FontAwesomeIcon className="social-links__icon" icon={brands('github')} /></a>
            <a className="social-link" target="_blank" href="https://www.dev.to/0xjosiah"><FontAwesomeIcon className="social-links__icon" icon={brands('dev')} /></a>
        </div>
    )
}