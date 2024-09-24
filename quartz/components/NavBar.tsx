import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/navbar.scss"

interface Options {
    links: Record<string, string>
}

export default ((opts?: Options) => {
    const NavBar: QuartzComponent = ({ displayClass } : QuartzComponentProps) => {
    const links = opts?.links ?? [] 
    return (
    <header>
        <nav id="navbar" class={`${ displayClass ?? ""}`+ " navbar navbar-light navbar-expand-sm fixed-top"} role="navigation">
            <div class={`${ displayClass ?? ""}`+ " container"}>
                <a class ={`${ displayClass ?? ""}`+ " navbar-brand title font-weight-lighter"} href ={`/`}>
                        <span class="font-weight-bold">Jonas </span>

                        Pedersen
                        Vean
                </a>
            
            <div class={`${ displayClass ?? ""}`+ " collapse navbar-collapse text-right"} id="navbarNav">
                <ul class={`${ displayClass ?? ""}`+ " navbar-nav ml-auto flex-nowrap"}>
                    {Object.entries(links).map(([title, href]) => (
                    <li class={"nav-item" +` ${ (title==="research notes") ? " active " : ""}`}>
                        <a class="nav-link" href = {href}> {title}
                        </a>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </nav>
    </header>
    )
    }
    // would use NavBar.css = style here, but it seems to not load properly
    return NavBar
}) satisfies QuartzComponentConstructor
