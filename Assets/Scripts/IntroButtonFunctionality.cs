using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class IntroButtonFunctionality : MonoBehaviour
{

  public Button continueGame;
  float counter = 0f;

  // Use this for initialization
  void Start()
  {

  }

  // Update is called once per frame
  void Update()
  {

    if (Input.GetMouseButtonDown(0))
    {
      Debug.Log("please");

      counter++;

      Debug.Log(counter);
    }

    if (counter == 7)
    {

      continueGame.interactable = false;
    }
  }

  void OnMouseDown()
  {
    Debug.Log("clicked!");
  }
}