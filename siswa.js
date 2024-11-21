// ARRAY BERISI OBJECT

const daftarSiswa = [
    {
        nama: "Rosa",
        tanggalLahir: "23/1/2002",
        umur: "22",
        jenKel: "p",
        noHp: "24545653423",
        alamat: "Jl.Ki HadjarDewantara, Kuningan",
        email: "Rosa12@gmail.com",
        asalSekolah: "MAN 2 Kuningan",
    },
    {
        nama: "Lily",
        tanggalLahir: "23/4/2002",
        umur: "22",
        jenKel: "p",
        noHp: "2454565455",
        alamat: "Jl.Imam Bonjol, Jakarta",
        email: "Lily342@gmail.com",
        asalSekolah: "SMK N 1 Jakarta",
    },
    {
        nama: "Deny",
        tanggalLahir: "28/2/2002",
        umur: "22",
        jenKel: "l",
        noHp: "24545656868",
        alamat: "Jl.Kenanga, Jember",
        email: "Deny56@gmail.com",
        asalSekolah: "SMA 1 Jember",
    },
    {
        nama: "Gabriel",
        tanggalLahir: "15/8/2002",
        umur: "22",
        jenKel: "l",
        noHp: "24545679546",
        alamat: "Jl.Pegangsaan Timur, Bogor",
        email: "Gabriel534@gmail.com",
        asalSekolah: "MAM 2 Bogor",
    },
    {
        nama: "Ali",
        tanggalLahir: "7/9/2002",
        umur: "22",
        jenKel: "l",
        noHp: "245456508856",
        alamat: "Jl. Asia Afrika, Semarang",
        email: "Ali88@gmail.com",
        asalSekolah: "SMK N 3 Semarang",
    },
]

let mode = 'tambah'

// READ

const tampilkanSiswa = () => {
    const tblSiswa = document.getElementById(`tblSiswa`)
    tblSiswa.innerHTML = "<tr><th>No</th><th>Nama</th><th>TL</th><th>Umur</th><th>JenKel</th><th>No Hp</th><th>Asal Sekolah</th><th>Alamat</th><th>Email</th><th>Hapus</th><th>Edit</th></tr>"

        for(let idx in daftarSiswa) {
        console.log(`${parseInt(idx) + 1}. ${daftarSiswa[idx].nama} tanggal lahirnya ${daftarSiswa[idx].tanggalLahir} berumur ${daftarSiswa[idx].umur} jenis kelaminnya ${daftarSiswa[idx].jenKel} no hpnya ${daftarSiswa[idx].noHp} hobinya ${daftarSiswa[idx].asalSekolah} beralamat ${daftarSiswa[idx].alamat} emailnya ${daftarSiswa[idx].email}`);

        tblSiswa.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarSiswa[idx].nama}</td><td>${daftarSiswa[idx].tanggalLahir}</td><td>${daftarSiswa[idx].umur}</td><td>${daftarSiswa[idx].jenKel}</td><td>${daftarSiswa[idx].noHp}</td><td>${daftarSiswa[idx].asalSekolah}</td><td>${daftarSiswa[idx].alamat}</td><td>${daftarSiswa[idx].email}</td><td><button class="btn btn-danger" onclick="hapusSiswa('${daftarSiswa[idx].nama}')">Delete</button></td><td><button class="btn btn-warning" onclick="editSiswa('${daftarSiswa[idx].nama}')">Edit</button></td></tr>`
}
}


 const tambahSiswa = () => {
    const nama = document.getElementById('txtNama').value
    const tanggalLahir = document.getElementById('txtTl').value
    const umur = document.getElementById('txtUmur').value
    const jenKel = document.getElementById('txtJenkel').value
    const noHp = document.getElementById('txtNohp').value
    const asalSekolah = document.getElementById('txtAskul').value
    const alamat = document.getElementById('txtAlamat').value
    const email = document.getElementById('txtEmail').value
    
     const siswaBaru = {
        nama: nama,
        tanggalLahir: tanggalLahir,
        umur: umur,
        jenKel: jenKel,
        noHp: noHp,
        asalSekolah: asalSekolah,
        alamat: alamat,
        email: email,
    }

    // jika tambah

    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        // jika edit
        daftarSiswa[mode] = siswaBaru
    }

    document.getElementById('txtNama').value = ""
    document.getElementById('txtTl').value = ""
    document.getElementById('txtUmur').value = ""
    document.getElementById('txtJenkel').value = ""
    document.getElementById('txtNohp').value = ""
    document.getElementById('txtAskul').value = ""
    document.getElementById('txtAlamat').value = ""
    document.getElementById('txtEmail').value = ""
    tampilkanSiswa()
    
 }

const cariIndex = (nama) => { 
    for (let i =0; i< daftarSiswa.length; i++) {
        if (daftarSiswa[i].nama == nama) {
           return i
        }
    }
    
}

// DELETE

const hapusSiswa = (target) => {
    const indexDihapus = cariIndex(target)
    // menghapus siswa
    if (indexDihapus !== -1) {
        daftarSiswa.splice(indexDihapus, 1)  
        tampilkanSiswa();
    }
}

// EDIT 
const editSiswa = (target) => { 
    const indexEdit = cariIndex(target)

    console.log(target)
    console.log(indexEdit)
    console.log(daftarSiswa[indexEdit])

    const siswaDiedit = daftarSiswa[indexEdit]

    document.getElementById('txtNama').value = siswaDiedit.nama
    document.getElementById('txtTl').value = siswaDiedit.tanggalLahir
    document.getElementById('txtUmur').value = siswaDiedit.umur
    document.getElementById('txtJenkel').value = siswaDiedit.jenKel
    document.getElementById('txtNohp').value = siswaDiedit.noHp
    document.getElementById('txtAskul').value = siswaDiedit.asalSekolah
    document.getElementById('txtAlamat').value = siswaDiedit.alamat
    document.getElementById('txtEmail').value = siswaDiedit.email

    mode = indexEdit

}

const batalEdit = (target) => {
    document.getElementById('txtNama').value = ""
    document.getElementById('txtTl').value = ""
    document.getElementById('txtUmur').value = ""
    document.getElementById('txtJenkel').value = ""
    document.getElementById('txtNohp').value = ""
    document.getElementById('txtAskul').value = ""
    document.getElementById('txtAlamat').value = ""
    document.getElementById('txtEmail').value = ""
    mode = 'tambah'

}


