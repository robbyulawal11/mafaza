/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"
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
import { Textarea } from "@/components/ui/textarea";
import { useFetchById } from '@/lib/useFetchById';
import axios from "axios";
import { useEffect, useState } from "react";

export function DialogEditAppointment({id}) {
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

    useEffect(() => {
        fetcherById(`appointment/${id}`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); 

    const handleEdit = (id) => {
        axios.put(`${import.meta.env.VITE_ENDPOINT}/appointment/${id}`, JSON.stringify(userAppointmentEdited))
        .then(response => {
        console.log('Data berhasil diperbarui:', response.data);
        window.location.reload();
        })
        .catch(error => {
        console.error('Gagal memperbarui data:', error);
        });
    };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='rounded-[10px] hover:bg-[#0F97B5]'>Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[800px]">
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
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          </div>
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          </div>
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          </div>
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          </div>
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          </div>
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          </div>
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="complaint" className="text-right">
              Complaint
            </Label>
            <Textarea
              id="complaint"
              defaultValue={dataById.complaint}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => handleEdit(id)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
