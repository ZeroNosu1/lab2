import 'package:firstproject/pages/twomain.dart';
import 'package:flutter/material.dart';
final _formKey = GlobalKey<FormState>();
  String _name = '';
  String _username = '';
  String _password = '';
  double _weight = 60;
  double _height = 170;

class Firstpage extends StatefulWidget {
  const Firstpage({super.key});

  @override
  State<Firstpage> createState() => _FirstpageState();
}

class _FirstpageState extends State<Firstpage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(""),
      ),
      body:  Center(
        child: Column(
        children: [
          CircleAvatar(
            radius: 80,
            child: Text("โลโก้"),
          ),
          const SizedBox(height: 16),
          const Text("Register"),

          TextFormField(
            decoration: InputDecoration(labelText: 'Name'),
                onChanged: (value) {
                  setState(() {
                    _name = value;
                  });
                },
              ),

              TextFormField(
                decoration: InputDecoration(labelText: 'Username'),
                onChanged: (value) {
                  setState(() {
                    _username = value;
                  });
                },
              ),

              TextFormField(
                decoration: InputDecoration(labelText: 'Password'),
                obscureText: true,
                onChanged: (value) {
                  setState(() {
                    _password = value;
                  });
                },
              ),

              SizedBox(height: 16),
              Text('Weight: ${_weight.round()} kg'),
              Slider(
                value: _weight,
                min: 30,
                max: 150,
                divisions: 120,
                label: _weight.round().toString(),
                onChanged: (value) {
                  setState(() {
                    _weight = value;
                  });
                },
              ),

              SizedBox(height: 16),
              Text('Height: ${_height.round()} cm'),
              Slider(
                value: _height,
                min: 100,
                max: 250,
                divisions: 150,
                label: _height.round().toString(),
                onChanged: (value) {
                  setState(() {
                    _height = value;
                  });
                },
              ),
              SizedBox(height: 16),
             ElevatedButton(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => TwomainPage()),
    );
  },
  child: Text('Next'),
),
        ],
      ),
    )
    );
  }
}