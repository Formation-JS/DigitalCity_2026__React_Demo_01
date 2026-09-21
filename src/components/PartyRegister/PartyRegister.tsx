import { useActionState, useId } from "react"

type PartyRegisterState = {
    message?: string;
}

async function partyRegisterAction(prevState: PartyRegisterState, formData : FormData) : Promise<PartyRegisterState> {
    if(formData.get('email')?.toString().includes('test')) {
        return  { message: 'Vous ne passerez pas ! 🧙‍♂️' }
    }

    return { message: 'Merci !' };
} 

export default function PartyRegister() {

    const [state, handleForm, isPending] = useActionState(partyRegisterAction, { message: undefined })

    // ↓ Génération d'id pour l'accessibilité !
    const inputId = useId()

    return (
        <form action={handleForm}>
            {/* (div>(label+input))*3 */}
            <div>
                <label htmlFor={inputId + "-email"}>Email : </label>
                <input id={inputId + "-email"} type="email" />
            </div>
            <div>
                <label htmlFor={inputId + "-nb"}>Nombre de personne : </label>
                <input id={inputId + "-nb"} type="number" />
            </div>
            <div>
                <label htmlFor={inputId + "-gamin"}>Garderie pour les enfants</label>
                <input id={inputId + "-gamin"} type="checkbox" />
            </div>
            <div>
                <button type="submit" disabled={isPending}>Envoyer</button>
                {state.message && <span>{state.message}</span>}
            </div>
        </form>
    )
}