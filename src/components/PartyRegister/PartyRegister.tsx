import { useActionState, useId } from "react"
import z from "zod";
import type { Registration } from "../../@types/registration";

type PartyRegisterState = {
    message?: string;
    formData?: FormData;
    errors?: {
        email?: string[]
        nbPeople?: string[]
        haveChildren?: string[]
    };
}

const registrationSchema : z.ZodType<Registration> = z.object({
    email: z.email(),
    nbPeople: z.coerce.number().positive().int(),
    haveChildren: z.coerce.boolean().default(false)
});


async function partyRegisterAction(prevState: PartyRegisterState, formData : FormData) : Promise<PartyRegisterState> {
    
    // Validation des données avec Zod
    const { data, success, error } = await registrationSchema.safeParseAsync(Object.fromEntries(formData));
    if(!success) {
        return  { 
            message: 'Formulaire en erreur ! 🔥',
            errors: z.flattenError(error).fieldErrors,
            formData
        };
    }
    
    // Exemple de validation sans exploiter Zod (ou d'autre package)
    if(formData.get('email')?.toString().includes('test')) {
        return  { 
            message: 'Vous ne passerez pas ! 🧙‍♂️',
            errors: {
                email: ['L\'email ne peut pas contenir de test :o']
            },
            formData
        };
    }

    // TODO Contacter le backend avec les data.
    await (new Promise((resolve) => setTimeout(resolve, 1_000)));


    return { message: 'Merci !' };
} 

export default function PartyRegister() {

    const [state, handleForm, isPending] = useActionState(partyRegisterAction, { message: undefined })
    console.log(state);
    

    // ↓ Génération d'id pour l'accessibilité !
    const inputId = useId()

    return (
        <form action={handleForm}>
            {/* (div>(label+input))*3 */}
            <div>
                <label htmlFor={inputId + "-email"}>Email : </label>
                <input name="email" id={inputId + "-email"} type="email" 
                    defaultValue={state.formData?.get('email')?.toString()} />
            </div>
            <div>
                <label htmlFor={inputId + "-nb"}>Nombre de personne : </label>
                <input name="nbPeople" id={inputId + "-nb"} type="number"
                    defaultValue={state.formData?.get('nbPeople')?.toString()} />
            </div>
            <div>
                <label htmlFor={inputId + "-gamin"}>Garderie pour les enfants</label>
                <input name="haveChildren" id={inputId + "-gamin"} type="checkbox"
                   defaultChecked={state.formData?.has('haveChildren')} /> 
            </div>
            <div>
                <button type="submit" disabled={isPending}>Envoyer</button>
                {state.message && <span>{state.message}</span>}
            </div>
        </form>
    )
}