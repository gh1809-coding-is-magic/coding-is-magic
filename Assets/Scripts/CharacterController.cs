using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class CharacterController : MonoBehaviour {

  UnityEvent m_SheepMove = new UnityEvent();

  public float speed;

  public float duration = 1f;

  float elapsedTime = Mathf.Infinity;

  Vector3 forward = new Vector3(0f, 0f, -10f);
  Vector3 backwards = new Vector3(-10f, 0f, 10f);
  Vector3 right = new Vector3(0f, 0f, 10f);
  Vector3 left = new Vector3(10f, 0f, 10f);




  // Use this for initialization
  void Start () {
    //m_SheepMove.AddListener(SheepMoveForward);
  //  WebGLInput.captureAllKeyboardInput = false;


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

    //if (Input.GetKeyDown(KeyCode.Space))
    //{
    //  m_SheepMove.Invoke();
    //}

    SheepMoveForward();

  }

  void SheepMoveForward(){

    elapsedTime = 0f;

    if (elapsedTime < duration){

      transform.position += forward * Time.deltaTime;
      
      elapsedTime += Time.deltaTime;

    }

  }
}
