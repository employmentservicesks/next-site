import OrganisationItem from "./OrganisationItem";

export default function Organisations() {


    return (
        <section className="w-full mb-24">
            <span className="font-bold text-3xl mb-8 block">Проект реализуется при поддержке</span>
            <div className="w-full md:flex flex-wrap gap-12 mx-auto justify-center">
                <OrganisationItem text={'Министерства труда и социальной защиты Российской Федерации'} />
                <OrganisationItem text={'Министерства науки и высшего образования Российской Федерации'} />
                <OrganisationItem text={'Министерства просвещения Российской Федерации'} />
            </div>
        </section>
    )
}