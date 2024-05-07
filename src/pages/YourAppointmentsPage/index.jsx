import { Link } from 'react-router-dom';
import heroService from '../../assets/images/heroImage/appointmentHero.png';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFetchById } from '@/lib/useFetchById';
import user1 from '../../assets/images/usersImage/user13.png';
import userIcon from '../../assets/images/iconImage/userIcon.png';
import pinIcon from '../../assets/images/iconImage/pinIcon.png';
import { useEffect, useState } from 'react';
import { useFetch } from '@/lib/useFetch';
import axios from 'axios';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Textarea } from '@/components/ui/textarea';

const YourAppointmentsPage = () => {
    const {fetcher, data} = useFetch();
    const {fetcherById, dataById} = useFetchById();
    const [userAppointmentEdited, userAppointmentEditedSet] = useState({
        name: "",
        gender: "",
        service: "",
        location: "",
        therapist: "",
        phone: "",
        date: "",
        time: "",
        complaint: "",
    });
    console.log(userAppointmentEdited);

    useEffect(() => {
        fetcher(`/appointment`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 


    const removeItem = (id) => {
        axios.delete(`${import.meta.env.VITE_ENDPOINT}/appointment/${id}`)
            .then(response => {
            alert('Success Delete!');
            console.log('Response berhasil delete:', response.data);
            window.location.reload();
            })
            .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleEdit = (id) => {
        fetcherById(`appointment/${id}`);
        userAppointmentEditedSet(dataById);
    }

    const confirmEdit = (id) => {
        axios.put(`${import.meta.env.VITE_ENDPOINT}/appointment/${id}`, userAppointmentEdited)
        .then(response => {
        console.log('Data berhasil diperbarui:', response.data);
        window.location.reload();
        })
        .catch(error => {
        console.error('Gagal memperbarui data:', error);
        });
    };

    return ( 
        <div className="flex-grow">
            <section className='h-[400px] w-auto flex justify-center items-center bg-center' style={{ backgroundImage:`url(${heroService})` }}>
                <div className='w-[480px] h-[118px] bg-[#062126] bg-opacity-70 rounded-[30px] flex justify-center items-center'>
                    <h2 className='text-white font-bold text-[48px]'>Your Appointment</h2>
                </div>
            </section>
            <section className='bg-white'>
                <div className='flex'>
                    <div className='bg-[#E5661E] bg-opacity-5 w-[400px] h-auto flex flex-col justify-start items-center py-[70px] px-[20px]'>
                        <img className='w-[150px] h-[150px] mb-[12px]' src={user1} alt="user 1" />
                        <h5 className='text-[#062126] font-semibold text-[26px] mb-[28px]'>Robiul Awal</h5>
                        <hr className='border border-[#062126] border-opacity-30 border-1 w-[300px] mb-[28px]'/>
                        <div className='flex flex-col items-start gap-[10px]'>
                            <div className='flex items-center gap-3 hover:bg-white w-[300px] px-5 py-2  rounded-[10px] cursor-pointer'>
                                <img className='w-[20px] h-[20px]' src={userIcon} alt="user icon" />
                                <p className='text-[#062126] opacity-60 font-medium text-[20px]'>Profil</p>
                            </div>
                            <div className='flex items-center gap-3 hover:bg-white w-[300px] px-5 py-2 rounded-[10px] cursor-pointer'>
                                <img className='w-[20px] h-[20px]' src={pinIcon} alt="pin icon" />
                                <p className='text-[#062126] opacity-60 font-medium text-[20px]'>Appointment</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-[48px]'>
                        <h2 className='text-[#062126] font-bold text-[32px] mb-[28px]'>Appointment</h2>
                        <div className='flex gap-[28px] text-[#062126] opacity-60 font-medium text-[20px] mb-[10px]'>
                            <Link>
                                <p className='hover:text-[#E5661E]'>All Appointment</p>
                            </Link>
                            <Link>
                                <p className='hover:text-[#E5661E]'>Successed Appointment</p>
                            </Link>
                            <Link>
                                <p className='hover:text-[#E5661E]'>Canceled Appointment</p>
                            </Link>
                        </div>
                        <hr className='border border-[#062126] border-opacity-30 border-1 w-[800px] mb-[28px]'/>
                        <div>
                            {!data? null : [...data].map((value) => (
                                <div key={value.id} className='bg-[#24BEE0] bg-opacity-10 w-[800px] h-auto rounded-[10px] mb-[32px]'>
                                <div className='bg-[#24BEE0] rounded-t-[10px] h-[63px] flex items-center justify-between p-[30px]'>
                                    <div className='flex items-center gap-[34px]'>
                                        <p className='text-white mr-[12px]'>Created At : {value.createdAt}</p>
                                        <hr className='border border-white border-1 rotate-90 w-[30px]'/>
                                        <p className='text-white'>No Id : {value.id}</p>
                                    </div>
                                    <div className='bg-white w-auto px-[10px] h-[40px] rounded-[10px] flex justify-center items-center'>
                                        <p className='text-[#13BC24] font-regular text-[16px]'>{value.service}</p>
                                    </div>
                                </div>
                                <div className='p-[32px]'>
                                    <div className='flex'>
                                        <div className='mr-[100px]'>
                                            <h5 className='text-[#062126] font-regular text-[16px] mb-[10px]'>{value.name} / {value.gender}</h5>
                                            <div className='mt-[5px] flex mb-[10px]'>
                                                <h6 className='text-[#062126] font-regular text-[16px] mb-[5px] mr-[10px]'>Phone</h6>
                                                <p className='text-[#062126] opacity-60 font-regular text-[16px]'>{value.phone}</p>
                                            </div>
                                            <div>
                                                <h6 className='text-[#062126] font-regular text-[16px] mb-[5px]'>Date - Time Appointment</h6>
                                                <p className='text-[#062126] opacity-60 font-regular text-[16px] mb-[10px]'>{value.date} - {value.time}</p>
                                            </div>
                                        </div>
                                        <hr className='mt-[50px] border border-[#062126] border-opacity-70 border-1 rotate-90 w-[140px]' />
                                        <div className='flex flex-col'>
                                            <div>
                                                <h6 className='text-[#062126] font-regular text-[16px] mb-[5px]'>Location</h6>
                                                <p className='text-[#062126] opacity-60 font-regular text-[16px] mb-[10px]'>{value.location}</p>
                                            </div>
                                            <div>
                                                <h6 className='text-[#062126] font-regular text-[16px] mb-[5px]'>Therapist</h6>
                                                <p className='text-[#062126] opacity-60 font-regular text-[16px] mb-[10px]'>{value.therapist}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-[20px]'>
                                        <h6 className='text-[#062126] font-regular text-[16px] mb-[5px]'>Complaints of pain</h6>
                                        <p className='text-[#062126] opacity-60 font-regular text-[16px] mb-[10px]'>{value.complaint}</p>
                                    </div>
                                    <div className='mt-[10px] flex'>
                                        <h6 className='text-[#062126] font-regular text-[16px] mb-[5px] mr-[10px]'>Price</h6>
                                        <p className='text-[#062126] opacity-60 font-regular text-[16px] mb-[10px]'>Rp120.000</p>
                                    </div>
                                    <div className='flex justify-end gap-[12px]'>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button className='rounded-[10px] hover:bg-[#0F97B5]' onClick={() => handleEdit(value.id)}>Edit</Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px] lg:max-w-[700px]">
                                                <DialogHeader>
                                                <DialogTitle>Edit profile</DialogTitle>
                                                <DialogDescription>
                                                    Make changes to your appointment here. Click save when you are done.
                                                </DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4 py-4">
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                        Name
                                                        </Label>
                                                        <Input
                                                        id="name"
                                                        defaultValue={dataById.name}
                                                        className="col-span-3"
                                                        value={userAppointmentEdited.name} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, name: e.target.value}))}
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                        Gender
                                                        </Label>
                                                        <select name="gender" id="gender" value={userAppointmentEdited.gender} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, gender: e.target.value}))}>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                        Service
                                                        </Label>
                                                        <select name="service" id="service" value={userAppointmentEdited.service} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, service: e.target.value}))}>
                                                            <option value="Sport Massage">Sport Massage</option>
                                                            <option value="Sport Injury">Sport Injury</option>
                                                            <option value="Bekam">Bekam</option>
                                                            <option value="Excercise Therapy">Excercise Therapy</option>
                                                        </select>
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                        Therapist
                                                        </Label>
                                                        <select name="therapist" id="therapist" value={userAppointmentEdited.therapist} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, therapist: e.target.value}))}>
                                                            <optgroup label='Masseur'>
                                                                <option value="Dr. Derek Mendes, S.Or">Dr. Derek Mendes, S.Or</option>
                                                                <option value="Bob Singer, S.Or">Bob Singer, S.Or</option>
                                                            </optgroup>
                                                            <optgroup label='Masseus'>
                                                                <option value="Jane Nicholson, S.Or">Jane Nicholson, S.Or</option>
                                                                <option value="Dr. Alison Pretty, S.Or">Dr. Alison Pretty, S.Or</option>
                                                                <option value="Rebecca Flows, S.Or">Rebecca Flows, S.Or</option>
                                                                <option value="Maria Anderson, S.Or">Maria Anderson, S.Or</option>
                                                            </optgroup>
                                                        </select>
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                        Location
                                                        </Label>
                                                        <select name="location" id="location" value={userAppointmentEdited.location} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, location: e.target.value}))}>
                                                            <option value="Masjid Al-Jami">Masjid Al-Jami</option>
                                                            <option value="Jl. Veteran No. 93">Jl. Veteran No. 93</option>
                                                        </select>
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="phone" className="text-right">
                                                        Phone
                                                        </Label>
                                                        <Input
                                                        type="number"
                                                        id="phone"
                                                        defaultValue={dataById.phone}
                                                        className="col-span-3"
                                                        value={userAppointmentEdited.phone} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, phone: e.target.value}))}
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="date" className="text-right">
                                                        Date
                                                        </Label>
                                                        <Input
                                                        type="date"
                                                        id="date"
                                                        defaultValue={dataById.date}
                                                        className="col-span-3"
                                                        value={userAppointmentEdited.date} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, date: e.target.value}))}
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="time" className="text-right">
                                                        Time
                                                        </Label>
                                                        <Input
                                                        type="time"
                                                        id="time"
                                                        defaultValue={dataById.time}
                                                        className="col-span-3"
                                                        value={userAppointmentEdited.time} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, time: e.target.value}))}
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="complaint" className="text-right">
                                                        Complaint
                                                        </Label>
                                                        <Textarea
                                                        id="complaint"
                                                        defaultValue={dataById.complaint}
                                                        className="col-span-3"
                                                        value={userAppointmentEdited.complaint} onChange={(e) => userAppointmentEditedSet((prev) => ({ ...prev, complaint: e.target.value}))}
                                                        />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                <Button type="submit" onClick={() => confirmEdit(value.id)}>Save changes</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button className='rounded-[10px] bg-red-500 hover:bg-red-700'>Cancel</Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                <AlertDialogTitle>Confirm to cancel the appointment</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Are you absolutely sure to cancel the appointment with id {value.id}?
                                                </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                <AlertDialogCancel >Cancel</AlertDialogCancel>
                                                <AlertDialogAction className='hover:bg-[#0F97B5]' onClick={() => removeItem(value.id)}>Continue</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default YourAppointmentsPage;