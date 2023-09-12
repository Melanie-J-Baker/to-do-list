# To-Do-List

![image](https://github.com/Melanie-J-Baker/To-Do-List/assets/104843873/d8204367-4af0-4657-b96a-d70dc44fa0a1)
![image](https://github.com/Melanie-J-Baker/To-Do-List/assets/104843873/89428405-4ea3-41d4-a31a-5c1a8b235cba)
![image](https://github.com/Melanie-J-Baker/To-Do-List/assets/104843873/7f9c4e4f-75bd-45a1-8d07-786ccdcfafbe)
![image](https://github.com/Melanie-J-Baker/To-Do-List/assets/104843873/8a7178ce-a2eb-4a9e-bc39-4a2d788d05c3)

To-Do List project - Instructions taken from the Odin Project: https://www.theodinproject.com/lessons/node-path-javascript-todo-list

Our ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.

Your todo list should have projects or separate lists of todos. When a user first opens the app, there should be some sort of ‘default’ project to which all of their todos are put. Users should be able to create new projects and choose which project their todos go into.

You should separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.

The look of the User Interface is up to you, but it should be able to do the following:
- view all projects
- view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
- expand a single todo to see/edit its details
- delete a todo

Set up a function that saves the projects (and todos) to localStorage every time a new project (or todo) is created, and another function that looks for that data in localStorage when your app is first loaded. 

Additionally, here are a couple of quick tips to help you not get tripped up:
- Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there!
- localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them.
