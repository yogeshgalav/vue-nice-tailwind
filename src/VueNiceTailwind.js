// It’s often better to use a proper code parsing and generation library for such tasks.
// type plugin = { name: string, transform: (code: string, id: string) => string | false };

export default function VueNiceTailwind() {
	return {
		name: 'vue-nice-tailwind',
		// transform(code: string, id: string) {
		transform(code, id) {
			if(!id.includes('.vue')){
				return false;
			}

			const styleRegex = /<tailwind[^>]*>([\s\S]*?)<\/tailwind>/i;
			const styleMatch = code.match(styleRegex);
			
			if(!styleMatch){
				return code;
			}

			const styleContent = styleMatch[1] || '';
			const styleIdRegex = /#([a-zA-Z-]+)\s*{\s*([a-zA-Z- ]+)\s*}/g;
			const styleClassRegex = /.([a-zA-Z-]+)\s*{\s*([a-zA-Z- ]+)\s*}/g;
			let updatedCode = code;
			let idMatch;
			let classMatch;

			while ((idMatch = styleIdRegex.exec(styleContent))) {
				const idName = idMatch[1];
  				const tailwindClasses = idMatch[2];
				const htmlIdRegex = new RegExp(`<(\\w+)\\s+(id="${idName}")([^>]*)>`, 'g');

				updatedCode = updatedCode.replace(htmlIdRegex, `<$1 $2 class="${tailwindClasses}"$3>`)
			}
			while ((classMatch = styleClassRegex.exec(styleContent))) {
				const className = classMatch[1];
  				const tailwindClasses = classMatch[2];
				const htmlClassRegex = new RegExp(`<(\\w+)\\s+(class="${className}")([^>]*)>`, 'g');

				updatedCode = updatedCode.replace(htmlClassRegex, `<$1 class="${tailwindClasses}"$3>`)
			}
			updatedCode = updatedCode.replace(styleRegex,'');
			// console.log(updatedCode);

			return updatedCode;
		},
	};
}
  