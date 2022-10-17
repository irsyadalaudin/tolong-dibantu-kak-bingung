
import clubs from './clubs.js'

class DataSource {
	static searchClub (keyword) {
		return new Promise((resolve, reject) => {
			const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
		
			if (filteredClubs.length) {
				resolve(filteredClubs);
			} else {
				reject(`${keyword} is not found`)
			}
		})
	}
}

const executorFucntion = (resolve, reject) => {
	const filteredClubs = true;

	if (filteredClubs) {
		resolve('Klub berhasil ditemukan')
	} else {
		reject('Klub tidak ditemukan')
	}
}

const handlerSuccess = resolvedValue => {
	console.log(resolvedValue);
}

const handlerRejected = rejectionValue => {
	console.log(rejectionValue);
}

const filteredClubs = new Promise (executorFucntion);

export default DataSource;


/*  BISA MENGGUNAKAN YANG ATAS (DI KOLOM 248-257) MEMAKAI PENYESUAIAN PENGUBAHAN METHOD searchClub MENJADI STATIC & callback MENJADI PROMISE
        ATAU PAKAI   YANG DI BAWAH (DI KOLOM 262-268) MEMAKAI async/await

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value)
        } catch (message) {
            fallbackResult(message)
        }
    };
    */