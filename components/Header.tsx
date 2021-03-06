import dl1 from '../images/pexels-pixabay-260922.jpg'
import styles from './header.module.scss'
import Image from 'next/image'
import { HeaderProps } from './types'
import cn from 'classnames'
import { domainImage } from '../functions'
import theme from '../pages/theme.json'

function Hero(props: HeaderProps) {
    const { reverse = false, backgroundImageUrl = '', imageUrl = '', headline = '', modLayout = 'normal', altText = '' } = props

    const themeStyles = {
        backgroundColor: `${theme['main-color']}`,
        color: `${theme['text-color-accent']}`,
    }

    const gutterAlt = {
        backgroundColor: `${theme['accent-color-2']}`,
    }

    const backgroundImage = domainImage(backgroundImageUrl)
    const mainImage = domainImage(imageUrl)

    return (
        <div className={styles.root}>
            <div
                className={cn(styles.wrapper, {
                    [styles.reverse]: reverse,
                    [styles.altLayout]: modLayout === 'alt-layout',
                })}
            >
                <div className={styles.gutter} style={themeStyles}>
                    {backgroundImageUrl && (
                        <div className={styles.backgroundBlock}>
                            <Image src={backgroundImage} layout="fill" objectFit="cover" alt="" quality="50" />
                        </div>
                    )}
                </div>
                {imageUrl && (
                    <div className={styles.heroImage}>
                        <Image src={mainImage} layout="fill" objectFit="cover" alt={altText} priority quality="50" />
                    </div>
                )}

                <div className={styles.headline}>
                    <div className={styles.backgroundBlock} style={themeStyles}>
                        {backgroundImageUrl && <Image src={backgroundImage} layout="fill" objectFit="cover" alt="" quality="50" />}
                        <h1 className={styles.text}>{headline}</h1>
                    </div>
                </div>
                <div className={cn(styles.gutter, styles.gutter_alt)} style={gutterAlt}>
                    {backgroundImageUrl && (
                        <div className={styles.backgroundBlock}>
                            <Image src={backgroundImage} layout="fill" objectFit="cover" alt="" quality="50" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero
