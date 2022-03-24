def main [
    name: string    # name of the component
    --cssmodule (-c): bool # if true, generate a css module file for the component
] {
    # check if component already exists
    let component_template = $"
    import "@/components/($name).module.css";
    
    export default function ($name)" + "({ children, className }) {
      return (
        <div>
        </div>
      );
    }"

    let component_fn = $'../src/components/($name).jsx'
    let component_exists = ($component_fn | path exists | into bool)
    if ($component_exists) {
        echo "component file already exists... removing"
        rm $component_fn
    } else {
        $component_template | save $component_fn
    }

    if ($cssmodule) {
        let css_module_fn = $'../src/components/($name).module.css'
        let css_exists = ($css_module_fn | path exists | into bool)
        if ($css_exists) {
            echo "css module file already exists... removing"
            rm $css_module_fn
    
        } else {
            "" | save $css_module_fn
        }
    }
}