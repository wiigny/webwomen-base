const ulJobs = document.querySelector('#jobs')
const ulApplyJob = document.querySelector('#listApplyJob')
const listApplyJobs = []

// FAZER A ALTERAÇÃO DO BOTÃO CANDIDATAR, FAZER A FUNÇÃO PARA EXCLUIR DA LISTA E ARMAZENAR NO localStorage

function addJobs(data = jobsData ,jobs = ulJobs){
    jobs.innerHTML = ''
    data.forEach(objJobs => jobs.appendChild(makeRender(objJobs)))
    applyJobs()
}
addJobs()

function addApplyJobsInList(){
    ulApplyJob.innerHTML = ''

    listApplyJobs.forEach(obj => {
        ulApplyJob.append(...makeApplyJobs(obj))
    })
    
}

function applyJobs(){
    const buttons = document.querySelectorAll('#jobs')
    buttons.forEach(button=>{
        button.addEventListener('click', (e)=>{
            let button = e.target
            let id = Number(button.parentNode.parentNode.id)

            jobsData.filter(obj=> {
                if(obj.id == id){
                    if(!listApplyJobs.some(obj => obj.id == id )){
                        listApplyJobs.push(obj)
                    }
                }
            })

            addApplyJobsInList()
        })
    })
}

function makeApplyJobs(obj = listApplyJobs){
    let li = document.createElement('li')
        li.classList = 'dspl__flex f__d-column gap30'

        let divTitle = document.createElement('div')
            divTitle.classList = 'dspl__flex gap20 align__items-center'

            let h3 = document.createElement('h3')
                h3.classList = 'title5'
                h3.innerText = obj.title

            let button = document.createElement('button')
                button.classList = 'button__trash'
        divTitle.append(h3,button)

        let divSpan = document.createElement('div')
            divSpan.classList = 'dspl__flex gap20'

            let spanEnterprise = document.createElement('span')
                spanEnterprise.classList = 'text3'
                spanEnterprise.innerText = obj.enterprise

            let spanLocation = document.createElement('span')
                spanLocation.classList = 'text3'
                spanLocation.innerText = obj.location

        divSpan.append(spanEnterprise, spanLocation)
    li.append(divTitle,divSpan)
    let hr = document.createElement('hr')
    return [li, hr]
}

function makeRender(obj){
    let li = document.createElement('li')
        li.id = obj.id
        li.classList = "dspl__flex f__d-column gap20"
            let h3 = document.createElement('h3')
                h3.classList = 'title4'
                h3.innerText = obj.title

            let divSpan = document.createElement('div')
                divSpan.classList = 'dspl__flex gap20'
                let spanEnterprise = document.createElement('span')
                    spanEnterprise.classList = 'text3'
                    spanEnterprise.innerText = obj.enterprise
                let spanLocation = document.createElement('span')
                    spanLocation.classList = 'text3'
                    spanLocation.innerText = obj.location
            divSpan.append(spanEnterprise, spanLocation)

            let p = document.createElement('p')
                p.classList = 'text4'
                p.innerText = obj.descrition

            let divDescription = document.createElement('div')
                divDescription.classList = 'tagButton'
                let spanTag = document.createElement('span')
                    spanTag.classList = 'tag text3'
                    spanTag.innerText = `${obj.modalities.join(' / ')}`
                let button = document.createElement('button')
                    button.id = 'apply'
                    button.classList = 'button__bigDefault text5' 
                    button.innerText = 'Candidatar'
            divDescription.append( spanTag, button)
        li.append(h3,divSpan,p,divDescription)
    return li
}
