import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navbar.scss"


interface Options {
    paths: Record<string, string>
}

interface NameString {
    firstName: "Jonas"
    lastName: "Pedersen Vean"
}

export default ((opts?: Options, name?: NameString) => {
    const NavBar: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const aboutTitle = site.pages.find((p: any) => p.permalink ==='/')?.title;
    const paths = opts?.paths ?? []
    const firstName = name?.firstName;
    const lastName = name?.lastName;
    return (
    <header>
        <link rel="stylesheet" href=".../assets/css/bootstrap.min.css?a4b3f509e79c54a512b890d73235ef04"></link>
        <nav id="navbar" class="navbar navbar-light navbar-expand-sm sticky-top" role="navigation">
            <div class="container">
                if (page.permalink !== '/') {
                    <a class = "navbar-brand title font-weight-lighter" href ={`${site.baseurl}/`}>
                        if (firstName) {
                            <span class="font-weight-bold">
                                {firstName}
                            </span>
                        }
                        if (lastName) {
                            lastName
                    }
                    </a>
                }
            </div>

        </nav>
        { (
        <progress id="progress" value="0">
            <div class="progress-container"> 
                <span class="progress-bar"></span>
            </div>
        </progress>
        )}
    </header>
    )
}

  return NavBar
}) satisfies QuartzComponentConstructor

    

