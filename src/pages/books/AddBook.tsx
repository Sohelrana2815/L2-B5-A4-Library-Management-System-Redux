import SectionTitle from "@/components/sections/sectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, // Make sure FormMessage is imported
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { genres } from "@/constant/genre";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const AddBook = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [createBook, { isLoading, isError, error }] = useCreateBookMutation();

  console.log({ isLoading, isError, error });

  const form = useForm<FieldValues>({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // ensure copies is a number
      const copiesNumber = Number(data.copies) || 1;
      const payload = {
        ...data,
        copies: copiesNumber,
        available: true,
      };

      await createBook(payload).unwrap();
      toast.success("Book created successfully");
      form.reset();
      setOpen(false);
      navigate("/all-books");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Failed to create book", err);
      if (err?.status === 409) {
        return toast.error("ISBN must be unique");
      }
      // if backend returns message
      const message =
        err?.data?.message || err?.error || "Failed to create book";
      toast.error(message);
    }
  };

  return (
    <>
      <SectionTitle title="Add Book" />
      <div className="flex justify-center mt-10 min-h-screen">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="default"
              className="px-6 py-3 text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              + Add Book
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add book</DialogTitle>
            </DialogHeader>

            <DialogDescription className="sr-only">
              Open the form to add a new book
            </DialogDescription>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  rules={{
                    required: "Title is required",
                    minLength: {
                      value: 10,
                      message: "Title must be at least 10 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Title cannot exceed 50 characters",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Author */}
                <FormField
                  control={form.control}
                  name="author"
                  rules={{
                    required: "Author is required",
                    minLength: {
                      value: 5,
                      message: "Author must be at least 5 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Author cannot exceed 20 characters",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Genre */}
                <FormField
                  control={form.control}
                  name="genre"
                  rules={{ required: "Genre is required" }} // Added validation for genre
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Genre</FormLabel>
                      <Select
                        onValueChange={(val) => field.onChange(val)}
                        defaultValue={field.value || ""}
                        value={field.value || ""}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a genre" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          {genres.map((g) => (
                            <SelectItem key={g} value={g}>
                              {g.charAt(0) + g.slice(1).toLowerCase()}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* ISBN */}
                <FormField
                  control={form.control}
                  name="isbn"
                  rules={{ required: "ISBN is required and must be unique" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ISBN</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Copies */}
                <FormField
                  control={form.control}
                  name="copies"
                  rules={{
                    required: "Copies is required",
                    min: {
                      value: 1,
                      message: "Copies must be at least 1",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Copies</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          value={field.value || 1}
                          min={1}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>

                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save changes"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        <Toaster />
      </div>
    </>
  );
};

export default AddBook;
