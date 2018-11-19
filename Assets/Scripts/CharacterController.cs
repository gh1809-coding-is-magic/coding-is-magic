using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CharacterController : MonoBehaviour {

  public float speed;

  Vector3 forward = new Vector3(0f, 0f, -10f);
  Vector3 backwards = new Vector3(-10f, 0f, 10f);
  Vector3 right = new Vector3(0f, 0f, 10f);
  Vector3 left = new Vector3(10f, 0f, 10f);




  // Use this for initialization
  void Start () {


		
	}
	
	// Update is called once per frame
	void Update () {


    //if(Input.GetKey(KeyCode.W)){
    //  transform.position += forward * Time.deltaTime;

    //  transform.Rotate(0, Input.GetAxis("Horizontal"), 0);
    //}

    //if(Input.GetKey(KeyCode.S)){
    //  transform.position += backwards * Time.deltaTime;
    //}

    //if (Input.GetKey(KeyCode.A))
    //{
    //  transform.position += left * Time.deltaTime;
    //}

    //if (Input.GetKey(KeyCode.D))
    //{
    //  transform.position += right * Time.deltaTime;
    //}

    SheepMoveForward();



  }

  void SheepMoveForward(){

    //while(Time.time < 2){


      transform.position += forward * Time.deltaTime;
      
   // }

  }
}
